import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

/* eslint-disable react/prop-types */
export default function CardComponent({ name, image }) {
  return (
    <Card
      sx={{
        minHeight: "280px",
        width: 320,
      }}
    >
      <CardCover>
        <img src={image} loading="lazy" alt={name} />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="#fff"
          level="h2"
          fontSize="lg"
          mb={1}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
