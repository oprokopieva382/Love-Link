import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  AboutMe,
  AboutMeInterestHobbyBlock,
  Avatar,
  ProfileNavBar,
  Gallery,
  Spinner,
} from "../components";
import { BoxContainer } from "../style/profile.style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { GET_USER } from "../utils/queries";
import { ADD_PROFILE_IMG, ADD_GALLERY_IMG } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";

export const ProfileUser = () => {
  const [showProfileButton, setProfileButton] = useState(false);
  const [showGalleryButton, setGalleryButton] = useState(false);
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [galleryImgUrl, setGalleryImgUrl] = useState([]);
  const [isUser, setIsUser] = useState(false);

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: id },
  });
  const [addProfileImg] = useMutation(ADD_PROFILE_IMG);
  const [addGalleryImg] = useMutation(ADD_GALLERY_IMG);

  const cloudinaryRef = useRef();
  const widgetRefProfile = useRef();
  const widgetRefGallery = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRefProfile.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_API_KEY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_API_KEY_UPLOAD_PRESENT,
        folder: "lovelink/profile",
        theme: "purple",
      },
      function (err, result) {
        if (result.event === "success") {
          setProfileImgUrl(result.info.secure_url);
          setProfileButton(true);
        }
      }
    );

    const galleryArray = [];

    widgetRefGallery.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_API_KEY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_API_KEY_UPLOAD_PRESENT,
        folder: "lovelink/gallery",
        theme: "purple",
      },
      function (err, result) {
        if (result.event === "success") {
          const newObj = {
            name: result.info.original_filename,
            imageUrl: result.info.secure_url,
          };

          galleryArray.push(newObj);
          setGalleryButton(true);
          setGalleryImgUrl(galleryArray);
        }
      }
    );
  }, []);

  const avatar = data?.user?.image;
  const gallery = data?.user?.gallery;

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const updateUserGallery = async () => {
    setGalleryButton(false);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addGalleryImg({
        variables: { gallery: galleryImgUrl },
      });
    } catch (error) {
      console.error("Remove Mutation Error:", error);
    }
  };

  const updateUserAvatar = async () => {
    setProfileButton(false);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      await addProfileImg({
        variables: { image: profileImgUrl },
      });
    } catch (error) {
      console.error("Mutation Error:", error);
    }
  };

  return (
    <BoxContainer>
      <ProfileNavBar />
      <Box sx={{ flexGrow: 1, marginRight: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
            </Box>
            <Avatar avatar={avatar} />
            <AboutMe />
          </Grid>
          <Grid item xs={8}>
            <AboutMeInterestHobbyBlock 
              isUser={isUser}/>
            <Typography variant="h5">
              Gallery
            </Typography>
            <Gallery gallery={gallery} />
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
};
