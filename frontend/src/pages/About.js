import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <div>
                <h2>About {match.params.name}</h2>
            </div>
            {detail && (<div>detail : aldksjf</div>)}
        </div>
    );
};

export default About;