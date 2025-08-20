import React from "react";
import {
  Lightbulb,
  Users,
  Clock,
  ClipboardCheck,
  Handshake,
  MessageSquare,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Lightbulb className="icon" />,
      title: " One-Stop Solution",
      description:
        "From space planning to final styling, we handle design, execution, and handover seamlessly.",
    },
    {
      icon: <Users className="icon" />,
      title: "Experienced Team",
      description:
        "Our designers, architects, and site experts bring creativity, precision, and years of industry insight.",
    },
    {
      icon: <Clock className="icon" />,
      title: " Quick Turnaround",
      description:
        "We streamline design and execution phases to meet your timelines without compromising on quality.",
    },
    {
      icon: <ClipboardCheck className="icon" />,
      title: "Transparent Process",
      description:
        "Clear budgets, defined timelines, and open communication at every step.",
    },
    {
      icon: <Handshake className="icon" />,
      title: "Authority Relationships",
      description:
        "We coordinate with required authorities when needed, but focus primarily on smooth design to delivery execution.",
    },
    {
      icon: <MessageSquare className="icon" />,
      title: "Personalized Support",
      description:
        "From your first idea to move-in day, our team is by your side to ensure a stress free experience.",
    },
  ];

  return (
    <>
      <style>{`
        .why-section {
          padding: 4rem 1rem;
          // background: linear-gradient(to bottom right, #f8fafc, #e0f2fe);
        }
        .why-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .why-header {
           text-align: center;
          margin-bottom: 4rem;
        }
        .why-title {
          font-size: 2.2rem;
          color:black;
          font-weight: 480;
          margin-bottom: 1rem;
        }
        .why-subtitle {
          font-size: 1.2rem;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
		  text-align:center;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .why-card {
          background-color: white;
          border: none;
          // border-radius: 1rem;
          padding: 1rem;
          text-align: center;
          // transition: all 0.3s ease;
          // box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          // cursor: default;
        }
        // .why-card:hover {
        //   background-color: #CB4D29;
        //   transform: translateY(-8px);
        //   box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        // }
        .why-icon {
          // background-color: #e0f2fe;
          padding: 1rem;
          border-radius: 1rem;
          display: inline-block;
          margin-bottom: 1.5rem;
          transition: background-color 0.3s;
        }
        // .why-card:hover .why-icon {
        //   background-color: white;
        // }
        .icon {
          width: 32px;
          height: 32px;
          color: #CB4D29;
          transition: color 0.3s;
        }
        // .why-card:hover .icon {
        //   color: #CB4D29;
        // }
        .why-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
          transition: color 0.3s;
        }
        // .why-card:hover .why-card-title {
        //   color: white;
        // }
        .why-card-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #475569;
          transition: color 0.3s;
          text-align:center;
        }
        // .why-card:hover .why-card-text {
        //   color: white;
        // }
      `}</style>
      <section className="why-section" >
        <div className="why-container">
          <div className="why-header">
            <h2 className="why-title">Why We Are The Best Interior Designers?</h2>
            <p className="why-subtitle">
             We listen deeply, design intentionally, and deliver with care. 
Your goals shape everything we do
            </p>
          </div>
          <div className="why-grid">
            {features.map((feature, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{feature.icon}</div>
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
