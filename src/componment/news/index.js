import React, { useState, useEffect ,useReducer } from 'react';
import PubSub from 'pubsub-js';

export const News = () => {
  
  const click = () => {
    PubSub.publish('', 'hah');

  }

  return (
    <div>
      <button onClick={click}>改变title</button>
    </div>
  )
}