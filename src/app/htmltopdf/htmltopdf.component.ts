import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
// import jsPDF from 'jspdf';
var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var htmlToPdfmake = require("html-to-pdfmake");

declare const jsPDF: any;

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.css']
})
export class HtmltopdfComponent implements OnInit {
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  content: any;
  pdf_data:any;
 
  ngOnInit(): void {
  }
  public downloadAsPDF() {
  //   const doc= new jsPDF();
   
  //   const pdfTable = this.pdfTable.nativeElement;
   
  //    doc.html = htmlToPdfmake(pdfTable.innerHTML);
    
  //   const documentDefinition = { content: doc.html };
  
  // //  pdfMake.createPdf(documentDefinition).open(); 
  //  window.print('table table-bordered');
  



  
  } 
  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element:any, renderer:any) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.fromHTML(pdfTable.innerHTML, 15, 100, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');
  //   console.log(pdfTable.innerHTML);
  // }   
 
  }
  
  

