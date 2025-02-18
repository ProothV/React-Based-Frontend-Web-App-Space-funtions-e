import React from "react";

class Pop  extends React.Component {
    render() {
        return (
            <>
            <p>Hey, {this.props.nick} "Welcome back!" : "Please log in."</p>
            {this.props.children}

            </>
        );

    }
}
export default Pop;