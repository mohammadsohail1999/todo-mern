import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTitle, TitlebyId } from "../actions/TitleActions";
import { useHistory, useParams } from "react-router-dom";

const Modal = () => {
  const dispatch = useDispatch();
  const History = useHistory();
  const Params = useParams();
 

  useEffect(() => {
    dispatch(TitlebyId(Params.id));
  }, [dispatch, Params]);

  const { Title } = useSelector((state) => state.TitlebyId);

  

  return (
    <>
      {Title && (
        <div className="ui dimmer modals visible active">
          <div
            onClick={(e) => e.stopPropagation()}
            className="ui standard modal visible active"
          >
            <div className="header">
                {Title.Title}
            </div>
            <div className="content">
                Are you sure You want To delete This ?
            </div>
            <div className="actions">
              <button onClick={()=>{
                  dispatch(DeleteTitle(Params.id))
                  History.push('/')

              }} className="ui red button">Delete</button>
              <button onClick={()=>{
                  History.push('/')
              }} className="ui button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
