import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featured__top">
                <h1 className="featured__top--title">Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="featured__bottom">
                <div className="featured__chart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className="featured__bottom-title">Total Sales made today</p>
                <p className="featured__bottom-amount">$420</p>
                <p className="featured__bottom-description">Previous transactions processing. Last payments may not be included</p>
                <div className="summary">
                    <div className="summary__item">
                        <div className="item-title">Target</div>
                        <div className="item-result item-result--negative">
                            <KeyboardArrowDownIcon />
                            <div className="item-result__amount">$12.4k</div>
                        </div>
                    </div>
                    <div className="summary__item">
                        <div className="item-title">Last Week</div>
                        <div className="item-result item-result--positive">
                            <KeyboardArrowUpIcon />
                            <div className="item-result__amount ">$12.4k</div>
                        </div>
                    </div>
                    <div className="summary__item">
                        <div className="item-title">Last Month</div>
                        <div className="item-result item-result--negative">
                            <KeyboardArrowDownIcon />
                            <div className="item-result__amount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
