import { useState } from "react";

function App() {
  const [, setSelectedMenu] = useState("tour-guide-management");
  const [filterValue, setFilterValue] = useState("all");

  const menuItems = [
    { id: "tour-request", label: "ข้อมูลไกด์นำเที่ยว" },
    { id: "create-tour", label: "ประเภทใครไกด์นำที่ยว" },
    { id: "tour-language", label: "ภาษาไกด์สามารถสื่อสาร" },
    { id: "tour-location", label: "พื้นที่ไกด์รับงาน" },
    { id: "tour-guide-management", label: "ตรวจสอบและอนุมัติไกด์นำเที่ยว", active: true },
    { id: "reports", label: "ออกจากระบบ" },
  ];

  const tourGuideData = [
    { id: 1, name: "นายซ จองใส", status: "รอพิจารณา" },
    { id: 2, name: "นายซ จองใส", status: "รอพิจารณา" },
    { id: 3, name: "นายซ จองใส", status: "รอพิจารณา" },
    { id: 4, name: "นายซ จองใส", status: "รอพิจารณา" },
    { id: 5, name: "นายซ จองใส", status: "รอพิจารณา" },
  ];

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '200px',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Logo/Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#333',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            color: 'white',
            fontSize: '24px'
          }}>
            👤
          </div>
          <div style={{
            fontSize: '14px',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            Tour Guide Management<br />System
          </div>
        </div>

        {/* Menu Items */}
        <div style={{
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '35px' // เว้นห่างระหว่างปุ่ม
}}>
  {menuItems.map((item) => (
    <button
      key={item.id}
      onClick={() => setSelectedMenu(item.id)}
      style={{
        width: '100%',
        padding: '12px 8px',
        backgroundColor: item.active ? '#c8d4e8' : 'transparent',
        border: item.active ? '1px solid #999' : '1px solid #ddd',
        borderRadius: '7px',
        fontSize: '15px',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        lineHeight: '1.3'
      }}
      onMouseOver={(e) => {
        if (!item.active) {
          e.currentTarget.style.backgroundColor = '#f0f0f0';
        }
      }}
      onMouseOut={(e) => {
        if (!item.active) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {item.label}
    </button>
  ))}

        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '30px',
          textAlign: 'center'
          
        }}>
          ตรวจสอบและอนุมัติไกด์นำเที่ยว
        </h1>

        {/* Filter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
          
        }}>
          <label style={{
            fontSize: '16px',
            marginRight: '15px',
            color: '#333'
          }}>
            รายชื่อผู้สมัครไกด์
          </label>
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              backgroundColor: 'white',
              minWidth: '120px'
            }}
          >
            <option value="all">รอดำเนินการ</option>
            <option value="pending">รอพิจารณา</option>
            <option value="approved">อนุมัติแล้ว</option>
            <option value="rejected">ไม่อนุมัติ</option>
          </select>
        </div>

        {/* Table */}
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          

        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 200px',
            backgroundColor: '#e8eef7',
            borderBottom: '1px solid #ccc'
          }}>
            <div style={{
              padding: '12px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333',
              borderRight: '1px solid #ccc'
            }}>
              ลำดับที่
            </div>
            <div style={{
              padding: '12px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333',
              borderRight: '1px solid #ccc'
            }}>
              ชื่อผู้สมัคร
            </div>
            <div style={{
              padding: '12px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              สถานะการสมัคร
            </div>
          </div>

          {/* Table Rows */}
          {tourGuideData.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 200px',
                borderBottom: index < tourGuideData.length - 1 ? '1px solid #eee' : 'none',
                backgroundColor: 'white'
              }}
            >
              <div style={{
                padding: '12px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#333',
                borderRight: '1px solid #eee'
              }}>
                {item.id}
              </div>
              <div style={{
                padding: '12px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#333',
                borderRight: '1px solid #eee'
              }}>
                {item.name}
              </div>
              <div style={{
                padding: '12px',
                textAlign: 'center',
                fontSize: '14px'
              }}>
                <span style={{
                  color: '#e74c3c',
                  fontWeight: '500'
                }}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default App;