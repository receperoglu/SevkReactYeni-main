import React, { useState } from "react";
import Arrow from "./Tools/Arrow";

export default function FilesComponent({ Files, showPicturePreview }) {
  const [FilesVisible, setFilesVisible] = useState(true);
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  return (
    <div className={Files.length === 0 ? "hide" : "col-xs-12 col-md-12"}>
      <div
        onClick={() => {
          toggleView()
        }}
        className="PartHead"
      >
        Dökümanlar
        <Arrow Direction={FilesVisible} />
      </div>
      <div className={FilesVisible ? "padd5" : "hide"}>
        <div className="padd5">
          {Files.map((f) =>
            f.FileType === "Picture" ? (
              <div
                key={f.id}
                data-url={f.Path}
                data-ext={f.ext}
                style={{ height: "150px" }}
                className=" FileIco text-center col-md-2 col-xs-6 padd0 cpointer  filepreview"
              >
                <div className="FileBorder">
                  <div
                    onClick={() => {
                      showPicturePreview(
                        `http://recep.space/abi/dosyalar/${f.Path}`,
                        f.Path
                      );
                    }}
                    style={{
                      backgroundImage: `url(http://recep.space/thumbs/${f.Path})`,
                    }}
                    className="PictureDiv"
                  ></div>
                  <a
                    className="FileLink"
                    href={`http://recep.space/abi/dosyalar/${f.Path}`}
                    target="blank"
                  >
                    {f.FileName.substring(0, 12)}
                  </a>
                </div>
              </div>
            ) : (
              <div
                data-ext={f.ext}
                key={f.id}
                className="FileIco   text-center col-md-2 col-xs-6 padd0 cpointer  filepreview"
                style={{ height: "150px" }}
              >
                <div className="FileBorder">
                  <div
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "50%",
                      backgroundImage: `url(http://recep.space/abi/css/img/${f.ext.substring(
                        1
                      )}.png)`,
                    }}
                    className=" padd0   filepreview "
                  >
                    <a
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        display: "inline-flex",
                        width: "100%",
                        left: "0",
                      }}
                      className="FileLink"
                      href={`https://view.officeapps.live.com/op/embed.aspx?src=http://recep.space/abi/dosyalar/${f.Path}`}
                      target="blank"
                    >
                      <span style={{ textAlign: "center", width: "100%" }}>
                        {f.FileName.substring(0, 12)}
                      </span>
                    </a>
                    <a
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "20px",
                      }}
                      href={`http://recep.space/abi/dosyalar/${f.Path}`}
                      target="blank"
                    >
                      <span style={{ textAlign: "right", width: "100%" }}>
                        <i
                          data-icon-name="Download"
                          aria-hidden="true"
                          className="fright ms-Button-icon icon-73"
                        >
                          
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}