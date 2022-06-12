export class RolesManager {
    private roles: Array<Role>;
    private roleNbr: number = 0;

    constructor(roles:[Role]){
        this.roles = roles;
        this.roleNbr = roles.length;
    }
    private searchRole(roleName:string){
        for(let i = 0; i < this.roleNbr; i++){
            if(this.roles[i].name === roleName){
                return true;
            }
        }
        return false;
    }

    public isAdmin(){
        return this.searchRole("ROLE_ADMIN");
    }

    public isEmployee(){
        return this.searchRole("ROLE_EMPLOYEE");
    }

    public isCustomer(){
        return this.searchRole("ROLE_CUSTOMER");
    }

    public hasRole(){
        return this.roleNbr > 0;
    }
}

export class Role {
    constructor(public name: string){}
}