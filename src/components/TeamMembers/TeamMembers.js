import { TeamMembersContainer } from './TeamMembers.styles'

const employees =  [
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
    {"name": "John", "email": "james@gmail.com"},
]

// given an array of team members display each of them in an article

export const TeamMembers = ({teamMembers = undefined}) => (
    <TeamMembersContainer members={teamMembers ? teamMembers : employees}/>)

    // <TeamMembersContainer members={teamMembers}/>)

