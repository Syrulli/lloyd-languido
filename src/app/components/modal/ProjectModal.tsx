'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Dialog, DialogContent, Typography } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import { LayersIcon, TokenIcon} from '../icons/IconPack';
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

      <Dialog open={!!selectedProject} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent className="card-section hide-scrollbar">
          <div className="w-full">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-65 lg:h-117"
            >
              {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <TypographyHeader>{title}</TypographyHeader>
                  <div
                    className="w-full h-50 lg:h-100 bg-cover bg-center rounded-sm"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="space-y-4">
              <Typography gutterBottom sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                {description}
              </Typography>
              <TypographyHeader>
                <TokenIcon sx={{ fontSize: 'inherit' }} /> Features
              </TypographyHeader>
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
