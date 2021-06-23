import Users from './components/users/users';
import Menu from './components/menu/menu';
export default function App() {
    return (
        <div>
            <Menu
                pages={['users page','commets page','posts page']}
            classes ={['xxx','yyy']}/>
            <Users/>
            <Menu
                pages={['about','team']}
                classes={['asd','qwe']}/>
        </div>
    )
        ;
}


