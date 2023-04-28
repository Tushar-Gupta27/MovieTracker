import React, {useState,useEffect,useRef} from "react";
import {Wrapper,Content} from "./SearchBar-styles"
import SearchIcon from "../../images/search-icon.svg"



function SearchBar({setSearchTerm}){
    const [search,setSearch] = useState("");
    const [border,setBorder] = useState(false);
    const initial = useRef(true);

    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(search);
        },600);
        if(search){setBorder(true);}
        else{setBorder(false);
        }
        

        return ()=>clearTimeout(timer);
    },[search]);
    return(
        <Wrapper border={border}>
            <Content>
                <img src={SearchIcon} />
                <input 
                    type="text"
                    placeholder="Search Movie"
                    value={search} 
                    onChange={(e)=>{
                        return(setSearch(e.target.value))
                    }}
                    />
            </Content>
        </Wrapper>
    )
}


export default SearchBar;