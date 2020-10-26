import React, {Component} from 'react';
import Spinner from '../spinner';
import PropTypes from 'prop-types';

import './itemList.css';
export default class ItemList extends Component {
    
    state = {
        itemList: null
    }

    static propTypes = {
        getData: PropTypes.arrayOf(PropTypes.object)
    }

    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({itemList})
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {

            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li 
                    key={i}    
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}


