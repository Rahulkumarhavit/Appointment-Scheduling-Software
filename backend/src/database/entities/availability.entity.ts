import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { DayAvailavility } from "./day-availability";


@Entity()
export class Availability{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @OneToOne(()=> User, (user)=>user.availability)
    user:User;

    @OneToMany(() => DayAvailavility,(dayAvailavility)=>dayAvailavility.availability)
    days:DayAvailavility[];

    @Column({default:30})
    timeGap:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}