import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResourcesService } from '../service/resources.service';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    config = {
        toolbox: {
            showTitle: true,
            top: 0,
            right: '30px',
            show: true,
            feature: {
                dataView: {
                    title: 'View Data',
                    lang: [
                        'Data View',
                        'Turn Off',
                        'Refresh'
                    ]
                },
                dataZoom: {
                    title: {
                        zoom: 'Zoom',
                        back: 'Back'
                    }
                },
                magicType: {
                    type: [
                        'line',
                        'bar',
                        'stack',
                        'tiled'
                    ],
                    title: {
                        line: 'Line',
                        bar: 'Bar',
                        stack: 'Stack',
                        tiled: 'Tiled'
                    }
                },
                restore: {
                    title: 'Restore'
                }
            }
        },
        xAxis: [
            {
                data: []
            },
            {
                show: true,
                type: 'time',
                boundaryGap: false
            }
        ],
        yAxis: [
            {
                show: true,
                type: 'value',
                axisLabel: {
                    inside: false
                }
            }
        ],
        series: [],
        tooltip: {
            show: true,
            trigger: 'item',
            showContent: true
        }
    };

    constructor(private rest: ResourcesService) {
    }

    ngOnInit() {
        this.rest.fetchUnits().subscribe(units => {
            this.config.xAxis[0].data = units.map(unit => unit.title);
            forkJoin(units.map(unit => {
                return this.rest.fetchFiles(unit.id).pipe(map(files => files.length));
            })).subscribe(data => {
                this.config.series.push({
                    type: 'bar',
                    name: 'fichas',
                    data
                });
                this.config = Object.assign({}, this.config);
            });
            forkJoin(units.map(unit => {
                return unit.itineraries.pipe(map(itineraries => itineraries.length));
            })).subscribe(data => {
                this.config.series.push({
                    type: 'bar',
                    name: 'itinerarios',
                    data
                });
                this.config = Object.assign({}, this.config);
            });
        });
    }
}
