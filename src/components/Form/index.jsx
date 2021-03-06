import React from 'react';
import './style.css';

function Form(props) {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid-center">
                    <form class="d-flex">
                        <input name="search"
                            class="form-control me-2"
                            type="search" placeholder="Search"
                            value={props.search} onChange={props.handleInputChange}
                            containerStyle = {{ align:'center', justifyConttent:'center'}} />
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Form;