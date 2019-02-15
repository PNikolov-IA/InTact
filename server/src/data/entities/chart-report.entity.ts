import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { StartDate } from './start-date.entity';
import { User } from './user.entity';
import { Device } from './device.entity';

@Entity({ name: 'chart_reports' })
export class ChartReport {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('bigint')
    periodInMilliseconds: number;

    @ManyToOne(type => Device, origin => origin.chartReports, {eager: true})
    origin: Device;

    @ManyToOne(type => Device, destination => destination.chartReports, {eager: true})
    destination: Device;

    @ManyToOne(type => User, user => user.tableReports)
    user: User;

    @JoinTable({ name: 'chart_reports_start_dates' })
    @ManyToMany(type => StartDate, startDate => startDate.chartReports, {eager: true})
    startDates: StartDate[];

}
