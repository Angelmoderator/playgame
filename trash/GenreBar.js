import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Context } from '..';

const GenreBar = observer( () => {

    const {game} = useContext(Context)

    return(

        <div>
            <ListGroup>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
            </ListGroup>
        </div>
    );
});

export default GenreBar;