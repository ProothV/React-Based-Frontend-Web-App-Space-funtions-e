import React, { useEffect, useState } from "react";

const Navbar2 = () => {
    const [searchchar, setsearchchar] = useState("");
    const [result, setresult] = useState([]);

    useEffect(() => {
        if (searchchar) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchchar}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.items) {
                        setresult(data.items.map(item1 => ({ title: item1.volumeInfo.title })));
                    } else {
                        setresult([]);
                    }
                })
                .catch((error) => console.log("Error fetching data: ", error));
        } else {
            setresult([]);
        }
    }, [searchchar]);

    return (
        <nav className="navbar navbar-expand-lg shadow ms-5">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <input 
                        type="text"
                        value={searchchar}
                        placeholder="Search Books"
                        onChange={(e) => setsearchchar(e.target.value)} 
                    />

                    {result.length > 0 && (
                        <ul className="list-unstyled">
                            {result.map((item, index) => (
                                <a href="https://chatgpt.com/c/679ba401-acc0-800f-91e5-5b139cd8727f" className="text-decoration-none"><li key={index}>{item.title}</li></a>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar2;
//