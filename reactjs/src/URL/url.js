let url = {
    admin: {
        signup: 'http://localhost:3000/admin/signUp'
        , signin: 'http://localhost:3000/admin/signIn'
    },
    organizer: {
        signin: 'http://localhost:3000/organizer/signIn'
        , signup: 'http://localhost:3000/organizer/signUp'
        , all: 'http://localhost:3000/organizer/viewAll'
        , particular: 'http://localhost:3000/organizer/particular'
    },
    player: {
        all: 'http://localhost:3000/player/viewAll'
        , particular: 'http://localhost:3000/player/particular'
        , signin: 'http://localhost:3000/player/signIn'
        , signup: 'http://localhost:3000/player/signUp'
        , sendRequest: 'http://localhost:3000/player/sendRequest'
        , search: 'http://localhost:3000/player/search'
        , searchByCategory: 'http://localhost:3000/player/searchByCategory'
    },
    tournament: {
        all: 'http://localhost:3000/tournament/viewAllTournament'
        , particular: 'http://localhost:3000/tournament/viewParticular'
        , registerTeam: 'http://localhost:3000/tournament/registerTeam'
    },
    team: {
        all: 'http://localhost:3000/team/viewAll'
        , byTournament: 'http://localhost:3000/team/byTournament'
        , register: 'http://localhost:3000/team/register'
        , particular: 'http://localhost:3000/team/particular'
    },
    category: {
        all: 'http://localhost:3000/category/viewAll'
        , update: 'http://localhost:3000/category/update'
        , remove: 'http://localhost:3000/category/remove'
        , add: 'http://localhost:3000/category/add'
    },
    subCategory: {
        all: 'http://localhost:3000/subCategory/all'
        , byCategory: 'http://localhost:3000/subCategory/byCategory'
    }
}

export default url;