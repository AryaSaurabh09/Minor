import { Card, Typography, Box } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import Link from "@mui/material/Link";

interface Member {
  name: string;
  link: string;
  role: string;
  image: string;
}

const MemberCard: React.FC<Member> = ({ name, link, role, image }) => {
  return (
    <Card
      elevation={1}
      sx={{
        width: 250,
        height: 250,
        margin: "auto",
        borderRadius: 5,
        transform: "none",
      }}
    >
      <Box
        sx={{
          height: 250,
          background: "url(" + image + ") center/cover no-repeat",
          transition: "none",
          "&:hover": {
            background:
              "linear-gradient(135.01deg, #2F3980 0%, rgba(47, 57, 128, 0.1) 100%), url(" +
              image +
              ") center/cover no-repeat",
          },
        }}
      >
        <Box
          sx={{
            opacity: 0,
            "&:hover": {
              opacity: 1,
            },
            transition: "all 0.5s ease-in-out",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "white", pl: 2, pt: 18 }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", pl: 2, pb: 3 }}>
              {role}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" sx={{ color: "white", pr: 2, pt: 18 }}>
              <Link href={link} target="_blank">
                <LinkIcon sx={{ color: "white", fontSize: 35 }} />
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MemberCard;
