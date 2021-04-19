import MovieContext from './index';
import PropTypes from 'prop-types';

const UserProvider = (props) =>{
    const infoUser = {
        id: 1,
        user: "admin",
        email: "admin@gmail.com",
        full_name: "Hoang Hung"
    }

    return(
        <MovieContext.Provider value={infoUser}>
            {props.children}
        </MovieContext.Provider>
    )
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserProvider;