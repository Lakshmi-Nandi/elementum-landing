import vector2517 from '../assets/Vector 2517.png'
import polygon2 from '../assets/Polygon 2.png'
import vector5 from '../assets/Vector 5.png'

export default function Progress() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "0px 0px clamp(40px, 8vw, 80px) 0px",
      }}
    >
      {/* Vector 2517 - full width curved red line */}
      <img
        src={vector2517}
        alt=""
        style={{
          position: "absolute",
          top: "clamp(-160px, -15vw, -185px)",
          left: "56%",
          transform: "translateX(-50%)",
          width: "clamp(70vw, 100vw, 1200px)",
          maxWidth: "120%",
          height: "auto",
          zIndex: 0,
          pointerEvents: "none",
          objectFit: "scale-down",
        }}
      />

      {/* Content row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(30px, 5vw, 60px)",
          rowGap: "clamp(30px, 4vw, 40px)",
          position: "relative",
          zIndex: 1,
          paddingTop: "clamp(30px, 5vw, 50px)",
          paddingLeft: "clamp(20px, 5vw, 60px)",
          paddingRight: "clamp(20px, 5vw, 60px)",
        }}
      >
        {/* Left - Image */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: "clamp(300px, 50vw, 500px)",
            maxWidth: "500px",
          }}
        >
          {/* Polygon 2 - triangle top left */}
          <img
            src={polygon2}
            alt=""
            style={{
              position: "absolute",
              top: "65px",
              left: "clamp(55px, -5vw, -25px)",
              width: "clamp(60px, 12vw, 130px)",
              height: "clamp(60px, 12vw, 100px)",
              zIndex: 1,
              objectFit: "contain",
            }}
          />

          {/* Circular image */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
            alt="working team"
            style={{
              width: "clamp(260px, 35vw, 380px)",
              height: "clamp(260px, 35vw, 380px)",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              position: "relative",
              zIndex: 2,
            }}
          />

          {/* Polygon 2 - triangle bottom right */}
          <img
            src={polygon2}
            alt=""
            style={{
              position: "absolute",
              bottom: "clamp(30px, -3vw, -30px)",
              right: "clamp(70px, -3vw, -30px)",
              width: "clamp(70px, 15vw, 130px)",
              height: "clamp(70px, 15vw, 130px)",
              zIndex: 3,
              objectFit: "contain",
              transform: "rotate(360deg)",
            }}
          />
        </div>

        {/* Right - Text */}
        <div
          style={{
            flex: "1 1 280px",
            maxWidth: "550px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "Gerbil",
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              fontWeight: "400",
              lineHeight: "1.3",
              color: "#000000",
              marginBottom: "clamp(16px, 3vw, 24px)",
            }}
          >
            <span
              style={{
                background: "#D7EEDD",
                borderRadius: "40px",
                padding: "0px clamp(4px, 1vw, 8px)",
              }}
            >
              See
            </span>{" "}
            how we can
            <br />
            help you{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 2 }}>progress</span>

              <img
                src={vector5}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "90%",
                  height: "clamp(12px, 2vw, 20px)",
                  objectFit: "fill",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
            </span>
          </h2>

          <p
            style={{
              fontFamily:
                "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#555555",
              lineHeight: "1.8",
              marginBottom: "clamp(20px, 3vw, 32px)",
              fontWeight: "400",
            }}
          >
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <a
            href="#"
            style={{
              fontFamily:
                "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
              fontSize: "clamp(13px, 1.8vw, 15px)",
              fontWeight: "500",
              color: "#000000",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={e => e.target.style.opacity = '0.6'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Read more{" "}
            <span style={{ letterSpacing: "2px", fontSize: "clamp(10px, 1.5vw, 12px)" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}