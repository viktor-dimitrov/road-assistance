

 export default function ServiceItem({ service }) {
    return (
      <li className="service-item">
        <p>
          <strong>{service.title}:</strong> {service.description}
        </p>
      </li>
    );
  }