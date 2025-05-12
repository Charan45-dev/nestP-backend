import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column('int',{
    nullable: false,
    name:'age',
  })
  age:number;

  @Column('varchar',{
    nullable: false,
    name:'gender',
  })
  gender:string;

  @Column('varchar',{
    nullable: false,
    name:'married',
  })
  married:string;
}