import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import { Device } from './device.entity';
import { TableReport } from './table-report.entity';
import { ChartReport } from './chart-report.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: null })
    FirstName: string;

    @Column({ default: null })
    LastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    isAdmin: boolean;

    @OneToMany(type => TableReport, tableReport => tableReport.user)
    tableReports: TableReport[];

    @OneToMany(type => ChartReport, chartReport => chartReport.user)
    chartReports: TableReport[];

    @OneToMany(type => User, user => user.adminUser)
    users: User[];

    @ManyToOne(type => User, admin => admin.users)
    adminUser: User;

    @JoinTable({ name: 'users_devices' })
    @ManyToMany(type => Device, device => device.users)
    devices: Device[];
}
