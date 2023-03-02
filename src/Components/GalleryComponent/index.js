import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { Container } from "../Styles";
import BackgroundTitle from "../BackgroundTitle";
import styled from "styled-components";
import Title from "../Title";

const GalleryWrapper = styled.div`
  width: 90%;
  padding: 3vw 10px 10px 10px;
  align-self: center;
  margin-top: 8vw;

  img {
    border-radius: 20px;
  }
`;
const GalleryComponent = ({ backgroundTitle, title, values }) => {
    const { t } = useTranslation(["common"]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
      <>
          {values.photos && (
            <Container style={{ flexDirection: "column" }}>
                {backgroundTitle && (
                  <BackgroundTitle
                    backgroundTitle={backgroundTitle}
                    fontSize="8vw"
                    style={{ top: 0, textAlign: "end" }}
                  />
                )}
                <GalleryWrapper>
                    <Title title={title} style={{ fontSize: "2vw", paddingRight: "10vw", textAlign: "end" }} />
                    <Gallery
                      onClick={openLightbox}
                      photos={values.photos}
                      margin={20}
                      targetRowHeight={10}
                      limitNodeSearch={values.limitNodeSearch}
                      direction={values.direction}
                    />
                    <ModalGateway>
                        {viewerIsOpen ? (
                          <Modal onClose={closeLightbox}>
                              <Carousel
                                currentIndex={currentImage}
                                views={values.photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                              />
                          </Modal>
                        ) : null}
                    </ModalGateway>
                </GalleryWrapper>
                <Button
                  text={t("common:seeAll")}
                  whereTo="gallery"
                  style={{
                      position: "relative",
                      alignSelf: "end",
                      marginRight: "10vw"
                  }}
                />
            </Container>
          )}
      </>
    );
};

export default GalleryComponent;
