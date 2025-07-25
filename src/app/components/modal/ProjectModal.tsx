'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import { LayersIcon, SettingsSuggestOutlinedIcon } from '../icons/IconPack';
import type { ProjectModalProps } from '@/types/project';

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
  if (!selectedProject) return null;

  const { image, title, description, techStack } = selectedProject;
  const images = Array.isArray(image) ? image : [image];

  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: gray !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}</style>

      <Dialog
        open={!!selectedProject}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          },
        }}

      >
        <DialogContent className="card-section hide-scrollbar">
          <TypographyHeader>{title}</TypographyHeader>
          <div className="w-full">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-65 lg:h-120"
            >
              {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>

                  <img
                    src={imgSrc}
                    alt={`${title} screenshot ${index + 1}`}
                    loading="lazy"
                    className="w-full h-50 lg:h-105 object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className=" space-y-4">
              <Box onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                onTouchStart={(e) => e.preventDefault()}
                sx={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                }}>
                <Typography sx={{ textAlign: 'justify', fontSize: '0.8rem', pb: 2, }}>
                  {description}
                </Typography>
                <TypographyHeader>
                  <SettingsSuggestOutlinedIcon sx={{ fontSize: 'inherit', mb: 0.5 }} /> Features
                </TypographyHeader>
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <ul className="list-disc list-inside text-[0.8rem] text-foreground/80 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </Box>
              <div>
                <TypographyHeader>
                  <LayersIcon sx={{ fontSize: 'inherit' }} /> Tech Stack
                </TypographyHeader>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
};

export default ProjectModal;
