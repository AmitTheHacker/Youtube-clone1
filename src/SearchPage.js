import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import "./SearchPage.css"



function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj"
            channel="The Destroyer"
            verified
            subs="323k"
            noOfVideos={382}
            description="You can find awesome Programming Languages Tutorials.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             />
             <hr />

             <VideoRow
             views="1.1k"
             subs="320k"
             description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             channel="The Destroyer"
             title="🔴 Let's Build a whattsapp Clone with REACT JS for Beginners"
             timestamp="3 days ago"
             image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBzdDF6q1WtimltXo6rEm4vlbwZOA"
              />

<VideoRow
             views="1.1k"
             subs="320k"
             description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             channel="Clever Programmers"
             title="🔴 Let's Build a Messanger Clone with REACT JS for Beginners"
             timestamp="3 days ago"
             image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBDOwwaR8JUxLNVlvwFsRDQ4p-vWA"
              />

<VideoRow
             views="1.1k"
             subs="320k"
             description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             channel="The Destroyer"
             title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
             timestamp="3 days ago"
             image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBuxYKxJJAKTos0u6_neFEsk7-3zA"
              />

<VideoRow
             views="1.1k"
             subs="320k"
             description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             channel="The Destroyer"
             title="🔴 Let's Build a Amazon Clone with REACT JS for Beginners"
             timestamp="3 days ago"
             image="https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBItWKQuFyRiCvRlMeCHX6boNwd0g"
              />

<VideoRow
             views="1.1k"
             subs="320k"
             description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like.This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
             channel="The Destroyer"
             title="🔴 Let's Build a Zoom Clone with REACT JS for Beginners"
             timestamp="3 days ago"
             image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBzdDF6q1WtimltXo6rEm4vlbwZOA"
              />

        </div>
    )
}

export default SearchPage
