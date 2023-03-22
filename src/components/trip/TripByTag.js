import { useEffect, useState } from "react";
import { getTags } from "../../managers/TagManager";
import "./Trip.css"

export const TripByTag = ({ setSelectedTag }) => {
    const [tags, setTags] = useState([]);

    useEffect(
        () => {
            getTags().then((tagData) => setTags(tagData))
        }, [])

    return (
        <><section className="posts__dropdown">
            <label htmlFor="tags">Search By Tag</label><br></br>
            <select onChange={(event) => { setSelectedTag(parseInt(event.target.value)) }}>
                <option value="0" name="tag_id" className="form-control" >View All</option>
                {tags.map(tag => (
                    <option key={`tag--${tag.id}`} value={tag.id}>
                        {tag.type}
                    </option>
                )
                )}
            </select>
            </section>
        </>
    )
}