import { Card, Box, Typography, CardActionArea } from "@mui/material";
import TypographyHeader from "../typography/TypographyHeader";
import type { ProjectCardProps } from '@/types/project';
import AOSInitializer from '../aos/AOSInitializer';

export const ProjectCard = ({
    title,
    image: rawImage,
    techStack,
    size,
    onClick,
}: ProjectCardProps) => {

    const image = Array.isArray(rawImage) ? rawImage[0] : rawImage;
    const getSizeStyles = () => {
        switch (size) {
            case "large":
                return { gridColumn: "span 2", gridRow: "span 2", height: { xs: 230, md: 260, lg: 280 } };
            case "medium":
            case "small":
            default:
                return {
                    gridColumn: "span 1",
                    gridRow: "span 1",
                    height: { xs: 110, md: 140, lg: 140 },
                };
        }
    };

    return (
        <>
            <AOSInitializer />
            <Card
                className="card-section group" data-aos="fade-up"
                sx={{
                    ...getSizeStyles(),
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onClick={onClick}
            >
                <CardActionArea sx={{ height: "100%" }}>
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "brightness(0.8)",
                            zIndex: 0,
                            transition: "transform 0.5s, filter 0.5s",
                            ".card-section:hover &": {
                                filter: "brightness(0.4) blur(2px)",
                                transform: "scale(1.1)",
                            },
                        }}
                    />

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            height: "100%",
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            color: "#fff",
                            opacity: 0,
                            transform: "translateY(10px)",
                            transition: "opacity 0.4s, transform 0.4s",
                            ".card-section:hover &": {
                                opacity: 1,
                                transform: "translateY(0)",
                            },
                        }}
                    >
                        <Box>
                            <TypographyHeader>{title}</TypographyHeader>
                            {size === "large" && (
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.85, color: "white" }}
                                >
                                </Typography>
                            )}
                        </Box>

                        <Box className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </>
    );
};
