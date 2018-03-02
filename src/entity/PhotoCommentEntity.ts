import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { PhotographerEntity } from "./PhotographerEntity";
import { PhotoEntity } from "./PhotoEntity";

@Entity({"name":"photo_comment"})
export class PhotoCommentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(type => PhotoEntity, photo => photo.photoComments)
    photo: PhotoEntity;
}
