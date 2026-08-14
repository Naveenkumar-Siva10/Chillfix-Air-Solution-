/**
 * Generic JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> tag server-side.
 *
 * Usage:
 *   <JsonLd schema={mySchemaObject} />
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
