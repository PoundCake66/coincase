import React from 'react';
import PricesIndex from './prices_index'

class Prices extends React.Component {
    componentDidMount() {
        this.props.fetchTopCoins()
    }
    render() {
        return(
            <div className='prices-content'>
                <h1>Coins Index</h1>
                <div>
                    <PricesIndex coins={this.props.coins} />
                </div>
                <div>
                    <div>Search all assets</div>
                </div>
                
            </div>
        )
    }
}

export default Prices
