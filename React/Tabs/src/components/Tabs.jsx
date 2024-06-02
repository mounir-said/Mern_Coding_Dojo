import { useState } from 'react';

const Tabs = (props) => {
    const { tabs } = props;
    const [active, setActive] = useState(0);
    return (
        <div className="container">
            <div className="tabs">
                <div className="topics">
                    <ul>
                        {
                            tabs.map((item, index) => {
                                return <li onClick={() => setActive(index)} key={index}><h2>{item.title}</h2></li>;
                            })
                        }

                    </ul>
                    <div className='content'>
                        <p>{tabs[active].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;