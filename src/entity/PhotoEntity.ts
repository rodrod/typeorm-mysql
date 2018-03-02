import {Entity, PrimaryGeneratedColumn, Column, JoinTable, JoinColumn, OneToMany, OneToOne, ManyToMany} from "typeorm";
import {PhotographerEntity} from "./PhotographerEntity";
import {PhotoCommentEntity} from "./PhotoCommentEntity";

@Entity({"name":"photo"})
export class PhotoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;

    @OneToOne(type => PhotographerEntity)
    @JoinColumn()
    photographer: PhotographerEntity;

    @OneToMany(type => PhotoCommentEntity, photoComments => photoComments.photo)
    photoComments: PhotoCommentEntity[];

    
}
