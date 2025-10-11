import { constants } from "../utils/constants";

export function TermsConditions() {
return (
<main className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Terms & Conditions</h1>
<p className="text-sm text-gray-500 mt-1">Last updated: October 2025</p>
</header>


<section className="space-y-4 text-gray-800 leading-relaxed">
<p>Welcome to <strong>{COMPANY_NAME}</strong>. By accessing or using our website, you agree to the following terms and conditions.</p>


<div>
<h2 className="text-lg font-medium">Use of Website</h2>
<ul className="list-disc list-inside mt-2 text-gray-700">
<li>You must be at least 18 years old to use our services.</li>
<li>You agree not to misuse our site, disrupt functionality, or attempt unauthorized access.</li>
</ul>
</div>


<div>
<h2 className="text-lg font-medium">Products & Services</h2>
<p className="mt-2">All descriptions, prices, and availability are subject to change without notice. We reserve the right to refuse service or cancel orders at our discretion.</p>
</div>


<div>
<h2 className="text-lg font-medium">Intellectual Property</h2>
<p className="mt-2">All site content, including logos, text, images, and code, is the property of {constants.COMPANY_NAME} and may not be reproduced without written permission.</p>
</div>


<div>
<h2 className="text-lg font-medium">Limitation of Liability</h2>
<p className="mt-2">We are not liable for indirect, incidental, or consequential damages arising from your use of our services.</p>
</div>


<div>
<h2 className="text-lg font-medium">Changes to Terms</h2>
<p className="mt-2">We may update these Terms at any time. Please review this page periodically for changes.</p>
</div>
</section>
</main>
);
}