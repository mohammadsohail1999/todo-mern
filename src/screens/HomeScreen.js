import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getList } from "../actions/TitleActions";


export const HomeScreen = () => {
  const dispatch = useDispatch();

  

  const { List } = useSelector((state) => state.List);
  console.log(List);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className="ui grid">
      {List &&
        List.map((el, i) => (
          <div key={i} className="four wide column">
           <div className="ui card">
    <div className="content">
     
      <div className="header">
        {el.Title}
      </div>
      <div className="meta">
       {new Date(el.Date).toDateString()}
      </div>
      
    </div>
    <div className="extra content">
      <div className="ui two buttons">

       <Link to={`/${el._id}`}> <div className="ui basic green button">Edit</div></Link>
        <Link to={`/delete/${el._id}`}><div className="ui basic red button">Delete</div></Link>
      </div>
    </div>
  </div>
          </div>
        ))}
    </div>
  );
};
