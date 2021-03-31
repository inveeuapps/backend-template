import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, Index, OneToMany, OneToOne } from "typeorm";
import { Role } from "../roles/role.entity";
/**
 * Data object with annotations to configure database in ORM
 */
@Entity("tb_users")
export class User {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public password?: string;

  @Column({ nullable: true })
  public avatar?: string;

  @Column({ nullable: true })
  public country?: string;

  @Column({ nullable: true })
  public timeZone?: string;

  @Column({ nullable: true })
  public language?: string;

  @Column({ nullable: true })
  public ip?: string;

  public surrogateEnabled?: boolean;

  public surrogatePrincipal?: User;

  @Column({ default: false })
  public archived?: boolean;

  @ManyToMany((type) => Role, (role) => role.users)
  public roles?: Role[];

}
