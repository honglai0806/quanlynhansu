import { Component, OnInit, TemplateRef ,ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @ViewChild('templateDelete', { static: false }) templateDelete: TemplateRef<any>;
  public listMember: any;
  activePage: number = 0;
  modalRef: BsModalRef;

  items = [
    'Long Nguyen',
    'Pham Hoang Minh',
    'John Wich Newton',
    'Nguyen Trinh Minh Tu'
  ]
  filteredItems = [];
  searchMember: string;

  dataType = {
    model: 'selectType',
    availableOptions: [
      {
        id: 'selectType',
        nameType: 'All Local',
      },
      {
        id: 'a',
        nameType: 'A',
      }
    ],
  };

  dataAll = {
    model: 'selectAll',
    availableOptions: [
      {
        id: 'selectAll',
        name: 'All Local',
      },
      {
        id: 'a',
        name: 'A',
      }
    ],
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.listMember = [
      {
        id: 1,
        number: '01',
        name: 'Long Nguyen',
        active: true
      },
      {
        id: 2,
        number: '02',
        name: 'Pham Hoang Minh',
        active: false
      },
      {
        id: 3,
        number: '03',
        name: 'John Wich  Newton',
        active: true
      },
      {
        id: 4,
        number: '04',
        name: 'Nguyen Trinh Minh Tu',
        active: false
      },
      {
        id: 5,
        number: '05',
        name: 'Pham Hoang Minh',
        active: true
      },
      {
        id: 6,
        number: '06',
        name: 'John Wich Newton',
        active: false
      },
      {
        id: 7,
        number: '07',
        name: 'Hoang Minh Tung',
        active: true
      },
      {
        id: 8,
        number: '08',
        name: 'Pham Hoang Minh',
        active: false
      },
      {
        id: 9,
        number: '09',
        name: 'John Wich Newton',
        active: true
      },
      {
        id: 10,
        number: '10',
        name: 'Hoang Minh Tung',
        active: true
      }
    ]
  }

  ngAfterViewInit() {
    // one
    const elSelectCustom = document.getElementsByClassName("js-selectCustomMember")[0];
    const elSelectCustomValue = elSelectCustom.children[0];
    const elSelectCustomOptions = elSelectCustom.children[1];
    const defaultLabel = elSelectCustomValue.getAttribute("data-value");

    // Listen for each custom option click
    Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e: any) => {
        // Update custom select text too
        elSelectCustomValue.textContent = e.target.textContent;
        // Close select
        elSelectCustom.classList.remove("isActive");
      });
    });

    // Toggle select on label click
    elSelectCustomValue.addEventListener("click", (e) => {
      elSelectCustom.classList.toggle("isActive");
    });

    // close the custom select when clicking outside.
    document.addEventListener("click", (e: any) => {
      const didClickedOutside = !elSelectCustom.contains((event.target as Node));
      if (didClickedOutside) {
        elSelectCustom.classList.remove("isActive");
      }
    });

    const elSelectCustomTwo = document.getElementsByClassName("js-selectCustomMemberType")[0];
    const elSelectCustomValueTwo = elSelectCustomTwo.children[0];
    const elSelectCustomOptionsTwo = elSelectCustomTwo.children[1];
    const defaultLabelTwo = elSelectCustomValueTwo.getAttribute("data-value");

    // Listen for each custom option click
    Array.from(elSelectCustomOptionsTwo.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e: any) => {
        // Update custom select text too
        elSelectCustomValueTwo.textContent = e.target.textContent;
        // Close select
        elSelectCustomTwo.classList.remove("isActive");
      });
    });

    // Toggle select on label click
    elSelectCustomValueTwo.addEventListener("click", (e) => {
      elSelectCustomTwo.classList.toggle("isActive");
    });

    // close the custom select when clicking outside.
    document.addEventListener("click", (e: any) => {
      const didClickedOutside = !elSelectCustomTwo.contains((event.target as Node));
      if (didClickedOutside) {
        elSelectCustomTwo.classList.remove("isActive");
      }
    });
  }

  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber  
  } 
  search(event: any) {
    const textSearch: string = event.target.value;

    if (!textSearch || textSearch.length < 3) return
    const tmpArr = this.items.filter(item => item.includes(textSearch))
    this.filteredItems = tmpArr.splice(0, 4)
  }
  handelClick(item) {
    this.searchMember = item;
    this.filteredItems = [];
  }
  openModalCreate(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('popup-create');
  }
  openModalEdit(templateEdit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateEdit);
    this.modalRef.setClass('popup-editDepartment');
  }
  openDelete() {
    this.modalRef = this.modalService.show(this.templateDelete);
    this.modalRef.setClass('popup-delete');
  }
}

