/*
Extension for easily adding modifications to the MakeCode version of Counter-strike
by S0m3_random_guy with the use of blocks
*/

//% color=148 weight=0 block=Counter strike
//% groups=["Teams", "Maps", "Players", "Weapons", "Movement"]
namespace cstrike {
    //% blockId=cstrike_create_team
    //% block="create team with name $name"
    //% name.defl = "team"
    export function create_team(name: string): Team {
        let instance = new Team(name);
        return instance
    }
    class Team {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
}