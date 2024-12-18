import Layout from "@/components/Layout";

export default function Contact() {
    return (
        <Layout>
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
                Have questions or need more information? Feel free to reach out to us!
            </p>
            <ul className="mt-4 text-gray-600">
                <li>
                    <strong>Email:</strong> <a href="mailto:info@dypatilcoding.com" className="text-blue-600">info@dypatilcoding.com</a>
                </li>
                <li>
                    <strong>Phone:</strong> +91 98765 43210
                </li>
                <li>
                    <strong>Website:</strong> <a href="https://dypatilcoding.com" className="text-blue-600">https://dypatilcoding.com</a>
                </li>
            </ul>
        </Layout>
    );
}