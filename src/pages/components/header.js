import React, { Component } from 'react';

class Header extends Component {

    render(){
    
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                    <a class="navbar-brand text-white" href="#">EatTasty</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                    </div>
                </nav>
            </div>
        )
    };            
};

export default Header;