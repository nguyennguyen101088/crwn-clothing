import React from "react";
import Directory from "../../components/directory/directory.component";
import './homepage.style.scss';

const HomePage = ({history}) => (
    <div className="homepage">
        <Directory history={history} />
    </div>
)
export default HomePage;