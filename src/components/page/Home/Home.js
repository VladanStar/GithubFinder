import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='container'>
  <div className='search-form' >
    <h4>GitHub Search Users</h4>
    <form>
      <input type="text" />
      <button>Search</button>
    </form>
  </div>
  <div className='search-results'>
    <div className='user'>
      <div className='image'>

      </div>
      <div className='user=info'>
        <h4>Name of the User</h4>
        <small>ID34fj</small>
        <a href='http://cdn.vox-cdn.com/uploads/chorus_asset/file/22429121/imgres.0.html' alt="Photo user">View profile</a>

      </div>

    </div>

  </div>

     

      </div>
  )
}

export default Home