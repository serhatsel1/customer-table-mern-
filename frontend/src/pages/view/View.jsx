import "./view.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/${id}`);
        // console.log("Response:", res);

        if (res.status === 200) {
          const userData = res.data.user; // Veriyi user nesnesinden al
          setUser({ ...userData });
        } else {
          setUser({}); // Başarısız bir durumda kullanıcıyı temizle
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser({}); // Hata durumunda kullanıcıyı temizle
      }
    };

    if (id) {
      getSingleUser();
    }
  }, [id]);

  return (
    <div className="view">
      <div className="view-item">
        <b>ID:</b> <span>{user._id}</span>
      </div>
      <div className="view-item">
        <b>Name:</b> <span>{user.name}</span>
      </div>
      <div className="view-item">
        <b>Email:</b> <span>{user.email}</span>
      </div>
      <div className="view-item">
        <b>Country:</b> <span>{user.country}</span>
      </div>
      <div className="view-item">
        <b>Contact:</b> <span>{user.contact}</span>
      </div>
      <Link to={`/update/${user._id}`}>
        <button className="btn btn-success">Edit</button>
      </Link>
      <Link to={"/"}>
        <button className="btn btn-primary">Back</button>
      </Link>
    </div>
  );
};
