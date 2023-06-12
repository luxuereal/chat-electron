
import React from "react";
import { Link, useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';
import BaseLayout from "../layouts/Base";


export default function Chat(){

  
  const {id} = useParams()


  return(
  <BaseLayout canGoBack={true}>
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text = {`you joinde channel number: ${id}`}/>
        <ChatMessagesList />
      </div>
    </div>
  </BaseLayout>
  )
}