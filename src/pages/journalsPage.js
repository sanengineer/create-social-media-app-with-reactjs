import React, { Component } from "react";
import {
  BlobProvider,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: "20px",
    fontSize: "16pt",
    color: "#00000",
  },
  section: {
    margin: 4,
    padding: 4,
    fontSize: "12px",
  },
});

const PdfDoct = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            P Hal pertama yang harus kita lakukan adalah import. Setelah itu,
            siapkan styling terlebih dahulu untuk file PDF, yaitu react-pdf.
            Nah, react-pdf ini yang nanti akan menyediakan fitur styling dokumen
            sebagaimana ketika styling CSS.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

class PdfRender extends Component {
  componentDidMount() {
    console.log("journalsPage");
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <BlobProvider document={PdfDoct()}>
          {({ url }) => (
            <iframe
              title="pdf-doc-test"
              src={url}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </BlobProvider>
      </div>
    );
  }
}

export default PdfRender;
