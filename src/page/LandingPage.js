import React from 'react'
import './LandingPage.css'
import { useHistory } from "react-router-dom";
import { getElementError } from '@testing-library/react';

export default function LandingPage() {
    let history = useHistory();
    const enterHome = (e) => {
        e.preventDefault();
        history.push("/about");
    }
    return (
        <div className="fake-terminal">   
            <pre><output>{`
process user Henry Nguyen...
portfolio: Compiled successfully.
portfolio: Compiling...
Hash: 33d8c38093d5e8261eac
Version: portfolio 4.0
Time: 1337ms
                                   Asset       Size  Chunks                    Chunk Names
                             projects.js    12.3 MB       0  [emitted]  [big]  project
                                 home.js    6.36 MB       1  [emitted]  [big]  home
                                about.js    5.29 MB       2  [emitted]  [big]  about
                             organize.js    4.92 MB       3  [emitted]  [big]  organize
0.81c79b4db476a98d272f.add-positivity.js    87.4 kB       0  [emitted]         no-idea
 1.81c79b4db476a98d272f.and-happiness.js    7.94 kB       1  [emitted]         dashboard
    81c79b4db476a98d272f.hot-update.json   52 bytes          [emitted]
                           manifest.json  272 bytes          [emitted]
[./app/javascript/common/components/portfolio-final-final.js] [built]
            `}</output></pre>
            <button type="button" onClick={(e) => enterHome(e)}>
                Enter! 
            </button>
        </div>
    )
}
